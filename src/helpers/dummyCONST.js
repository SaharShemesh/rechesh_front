export let erp_budgets = [
  {
    bim_id: 2,
    budget: 400,
  },
  {
    bim_id: 3,
    budget: 12400,
  },
];

function user_initialization() {
  localStorage.setItem("user_id", 1);
  localStorage.setItem("user_name", "ישראל ישראלי");
  localStorage.setItem("bim_id", 2);
}
