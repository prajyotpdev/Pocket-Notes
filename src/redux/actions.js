const CHANGE_CATEGORY = "CHANGE_CATEGORY";

function changeCategory(newCategory) {
  return {
    type: CHANGE_CATEGORY,
    payload: newCategory,
  };
}
