import bgFood from "./assets/images/image-omelette.jpeg";
const App = () => {
  return (
    <div className="bg-Stone-100 flex items-center justify-center md:py-32 md:px-12">
      <div className="bg-white w-[736px] md:p-10 md:rounded-3xl">
        <img src={bgFood} alt="" className="w-full md:rounded-xl" />

        <div className="flex flex-col gap-8 md:mt-10 px-8 py-10 md:px-0 md:py-0">
          <section>
            <h2 className="font-Young text-4xl md:text-[48px] mb-6 text-Stone-900">
              Simple Omelette Recipe
            </h2>
            <p className="font-Outfit text-Stone-600">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </section>

          {/* Prepaparation Section */}

          <section className="p-6 bg-Rose-50 rounded-xl ">
            <h3 className="font-semibold text-xl mb-4 text-Rose-800">
              Preparation Time
            </h3>
            <ul className="list-disc pl-6">
              <li className="indent-4 mb-2 text-Stone-600">
                <span className="font-bold mr-1">Total:</span>Approximately 10
                minutes
              </li>
              <li className="indent-4 mb-2 text-Stone-600">
                <span className="font-bold  mr-1">Preparation:</span>5 minutes
              </li>
              <li className="indent-4 mb-2 text-Stone-600">
                <span className="font-bold mr-1">Cooking:</span> 5 minutes
              </li>
            </ul>
          </section>

          {/* Ingredients */}
          <section className="border-b border-Stone-150">
            <h3 className="text-Brown-800 text-[28px] font-Young mb-6">
              Ingedrients
            </h3>
            <ul className="list-disc pl-5 marker:text-Brown-800 mb-8">
              <li className="indent-4 mb-2 text-Stone-600">2-3 large eggs</li>
              <li className=" indent-4 mb-2 text-Stone-600">Salt, to taste</li>
              <li className="indent-4 mb-2 text-Stone-600">Pepepr, to taste</li>
              <li className="indent-4 mb-2 text-Stone-600">
                1 tablespoon of butter or oil
              </li>
              <li className="indent-4 mb-2 text-Stone-600">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>

          {/* Instructions */}
          <section className="border-b border-Stone-150">
            <h3 className="text-[28px] font-Young mb-6 text-Brown-800">
              Instructions
            </h3>
            <ol className="list-decimal marker:text-Brown-800 text-Stone-600 pl-6 text-start mb-10">
              <li className="pl-4 mb-2 ">
                <span className="font-bold ">Beat the eggs:</span>In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="pl-4 mb-2">
                <span className="font-bold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="mb-2 pl-4">
                <span className="font-bold">Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-4 mb-2">
                <span className="font-bold">Add fillings (optional):</span> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className="pl-4 mb-2">
                <span className="font-bold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pl-4 mb-2">
                <span className="font-bold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          <section className="flex flex-col gap-6">
            <h3 className="text-[28px] text-Brown-800  font-Young">
              Nutrition
            </h3>
            <p className="text-Stone-600">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table className="w-full">
              <tr className="border-b border-Stone-150">
                <td className="pl-8 py-3 text-Stone-600">Calories</td>
                <td className="pr-8 py-3 text-Brown-800 font-bold">277kcal</td>
              </tr>
              <tr className="border-b border-Stone-150 ">
                <td className="pl-8 py-3 text-Stone-600">Carbs</td>
                <td className="pr-8 py-3 text-Brown-800 font-bold">0g</td>
              </tr>
              <tr className="border-b border-Stone-150">
                <td className="pl-8 py-3 text-Stone-600">Protein</td>
                <td className="pr-8 py-3 text-Brown-800 font-bold">20g</td>
              </tr>
              <tr className="border-b border-Stone-150">
                <td className="pl-8 py-3 text-Stone-600">Fat</td>
                <td className="pr-8 py-3 text-Brown-800 font-bold">22g</td>
              </tr>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};
export default App;
