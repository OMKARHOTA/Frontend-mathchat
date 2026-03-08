import axios from "axios";

const API_URL = "https://huggingface.co/spaces/omkareswarhota1234/Math";

  if (query) {
    formData.append("question", query);
  }

  if (image) {
    formData.append("image", image);
  }

  if (audio) {
    formData.append("audio", audio);
  }

  const res = await axios.post(
    `${API_URL}/api/query/ask`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};


// Send feedback
export const sendFeedback = async (query, answer, feedback, rating) => {

  const res = await axios.post(
    `${API_URL}/api/feedback/submit`,
    {
      query,
      answer,
      feedback,
      rating
    }
  );

  return res.data;
};