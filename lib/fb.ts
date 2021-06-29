import axios from "axios";

export const fetchAndParseFacebookReviews = async () => {
  let res: { [key: string]: any };
  try {
    res = await axios.get("https://graph.facebook.com/v10.0/102063341422126", {
      params: {
        fields:
          "ratings{open_graph_story,has_rating,has_review,rating,recommendation_type,review_text,reviewer}",
        access_token: process.env.NEXT_PUBLIC_FB_TOKEN,
      },
    });
  } catch (err) {
    console.error(err);
  }

  return res.data.ratings.data;
};
