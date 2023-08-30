import { User_Model } from "$lib/server/models";
import type { Actions } from "@sveltejs/kit";

export async function load(event): Promise<any> {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return { status: 400, error: new Error("User could not be found") };
  } else {
    const games = user.games.map((game) => {
      const gameCopy = JSON.parse(JSON.stringify(game));
      delete gameCopy._id; // Remove the _id field
      return gameCopy;
    });
    return { games };
  }
}

export const actions: Actions = {
  default: async (event) => {
    const email = event.cookies.get("email");

    try {
      const user = await User_Model.findOne({ "user.email": email });

      if (!user) {
        return {
          status: 404,
          error: "User not found",
        };
      }

      user.games = [];

      console.log(user);

      await user.save();

      return {
        status: 200,
        message: "Games deleted succesfully",
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        error: "Error saving game",
      };
    }
  },
};
