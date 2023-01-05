// methodes
import http from "./http";

// config data
import apiUrl from "../config.json";

export async function getAllusers() {
  const { data } = await http.get(`${apiUrl.apiUrl}`);
  return data;
}

export async function getUsersByTxt(
  txt: string,
  fields: string[] = ["Name", "WorkTitle"]
) {
  const { data } = await http.post(`${apiUrl.apiUrl}/search`, {
    txt: txt,
    fields: fields,
  });
  return data;
}

export default {
  getAllusers,
  getUsersByTxt,
};
