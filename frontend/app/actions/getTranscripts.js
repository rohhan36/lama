import axios from "axios";

export default async function getTranscripts(id) {
  const res = await axios.get("http://localhost:8080/transcripts", {
    params: { projectId: id },
  });
  const data = await res.data;

  return data;
}
