import bgFood from "./assets/images/image-omelette.jpeg";
const App = () => {
  return (
    <div className="bg-Stone-100 flex items-center justify-center py-32 px-12">
      <div className="bg-white w-[736px] p-10 rounded-3xl">
        <img src={bgFood} alt="" className="w-full rounded-xl" />

        <div className="flex flex-col gap-8 mt-10">
          <section>
            <h2 className="font-Young text-[40px] mb-6 text-Stone-900">
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
          <section>
            <h3 className="text-Brown-800 text-[28px] font-Young mb-6">
              Ingedrients
            </h3>
            <ul className="list-disc pl-5">
              <li className="indent-4 mb-2">2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepepr, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
export default App;
