<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/users', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        return $this->json($em->getRepository(User::class)->findAll());
    }

    #[Route('/users/{id}', methods: ['GET'])]
    public function details(EntityManagerInterface $em, int $id): JsonResponse
    {
        $user = $em->getRepository(User::class)->find($id);
        return $this->json($user ?: [], $user ? 200 : 404);
    }

    #[Route('/users', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = (new User())
            ->setUsername($data['username'] ?? '')
            ->setEmail($data['email'] ?? '')
            ->setPassword($data['password'] ?? '')
            ->setRoles($data['roles'] ?? ['ROLE_USER']);
        $em->persist($user);
        $em->flush();
        return $this->json($user, 201);
    }

    #[Route('/users/{id}', methods: ['PUT'])]
    public function update(Request $request, EntityManagerInterface $em, int $id): JsonResponse
    {
        $user = $em->getRepository(User::class)->find($id);
        if (!$user) return $this->json([], 404);

        $data = json_decode($request->getContent(), true);
        $user
            ->setUsername($data['username'] ?? $user->getUsername())
            ->setEmail($data['email'] ?? $user->getEmail())
            ->setPassword($data['password'] ?? $user->getPassword())
            ->setRoles($data['roles'] ?? $user->getRoles());
        $em->flush();
        return $this->json($user);
    }

    #[Route('/users/{id}', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $em, int $id): JsonResponse
    {
        $user = $em->getRepository(User::class)->find($id);
        if ($user) {
            $em->remove($user);
            $em->flush();
        }
        return $this->json([], $user ? 200 : 404);
    }
}
