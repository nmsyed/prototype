import { CmsApi } from "../../http";

// eslint-disable-next-line import/prefer-default-export
export const HomeService = {
  submitTransaction,
  fetchProgrms,
  userStats,
  userTransactions,
};

async function submitTransaction(data) {
  return await CmsApi.post("saveTransaction", data);
}
function fetchProgrms(id) {
  return CmsApi.get("/programs");
}

function userStats() {
  return CmsApi.get("/userStats");
}

function userTransactions() {
  return CmsApi.get("/userTransactions");
}
