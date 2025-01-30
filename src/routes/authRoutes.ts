import express from "express";
import { login, logout, register } from "../controllers/authController";

const router = express.Router();

router.post("/register", register).get("/logout", logout).post("/login", login);

export default router;
