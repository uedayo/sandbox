<?php

namespace My\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use My\BlogBundle\Entity\Post;

class DefaultController extends Controller
{

    public function indexAction()
    {
        $em = $this->
getDoctrine()->getEntityManager();
        $posts = $em->getRepository('MyBlogBundle:Post')->findAll();
        return $this->render('MyBlogBundle:Default:index.html.twig', array('posts' => $posts));
    }

    public function showAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $post = $em->find('MyBlogBundle:Post', $id);
        return $this->render('MyBlogBundle:Default:show.html.twig', array('post' => $post));
    }

    public function newAction()
    {
        // build form
        $form = $this->createFormBuilder(new Post())
            ->add('title')
            ->add('body')
            ->getForm();

        // validation
        $request = $this->getRequest();
        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()) {
                $post = $form->getData();
                $post->setCreatedAt(new \DateTime());
                $post->setUpdatedAt(new \DateTime());
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($post);
                $em->flush();
                return $this->redirect($this->generateUrl('blog_index'));
            }
        }

        // draw
        return $this->render('MyBlogBundle:Default:new.html.twig', array('form' => $form->createView(),));
    }

    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $post = $em->find('MyBlogBundle:Post', $id);
        if (!$post) {
            throw new NotFoundHttpException('The post does not exist.');
        }
        $em->remove($post);
        $em->flush();
        return $this->redirect($this->generateUrl('blog_index'));
    }

    public function editAction($id)
    {
        // get data from DB
        $em = $this->getDoctrine()->getEntityManager();
        $post = $em->find('MyBlogBundle:Post', $id);
        if (!$post) {
            throw new NotFoundHttpException('The post does not exist.');
        }

        // build form
        $form = $this->createFormBuilder($post)
            ->add('title')
            ->add('body')
            ->getForm();

        // validate
        $request = $this->getRequest();
        if('POST' === $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()) {
                $post = $form->getData();
                $post->setUpdatedAt(new \DateTime());
                $em->flush();
                return $this->redirect($this->generateUrl('blog_index'));
            }
        }

        // draw
        return $this->render('MyBlogBundle:Default:edit.html.twig', array(
            'post' => $post,
            'form' => $form->createView(),
        ));
    }
}