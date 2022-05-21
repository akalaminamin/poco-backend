const router = require("express").Router();
const {
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");
const authorized = require("../middlewares/authorized");
const categoryValidation = require("../validations/categoryValidation");
router.post(
  "/createCategory",
  authorized,
  categoryValidation,
  createCategoryController
);
router.get(
  "/",
  authorized,
  getAllCategoryController
);
router.put(
  "/updateCategory/:categoryId",
  authorized,
  categoryValidation,
  updateCategoryController
);
router.delete(
  "/deleteCategory/:categoryId",
  authorized,
  deleteCategoryController
);
module.exports = router;
