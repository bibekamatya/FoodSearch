import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeSearchNav from "./searchNav/searchNav";
import RecipeList from "./pages/recipeList";
import FadeLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Footer from "./footer/footer";

const Home = () => {
  const APP_ID = "278b2b26";
  const APP_KEY = "bf1748fdd50f3a17e68699ef1041e84b";

  const [food, setfood] = useState([]);
  const [Search, setSearch] = useState("noodles");
  const [name, setname] = useState();
  const [recipeName, setrecipeName] = useState();
  const [Loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://api.edamam.com/search?q=noodles&app_id=${APP_ID}&app_key=${APP_KEY}`
  //     );
  //     setfood(response.data.hits);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${Search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setfood(response.data.hits);
    setname(Search);
    setrecipeName("");
    setSearch("");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    getRecipes();
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getRecipes();
    }
  };


  return (
    <>
      <RecipeSearchNav
        onClickSearch={onClickSearch}
        onKeyUp={onKeyUp}
        input={Search}
        onInputChange={onInputChange}
        name={name}
        recipeName={recipeName}
      />
      <div className='container main-page App px-4 px-md-0' style={{ Height: "800px" }}>
        {Loading ? (
          <FadeLoader
            size={100}
            color={"deepskyblue"}
            loading={Loading}
            css={css`
              position: relative;
              top: 70px !important;
            `}
          />
        ) : (
          <div className='row'>
            {food.map((food, index) => (
              <RecipeList
                img={food.recipe.image}
                title={food.recipe.label}
                key={food.recipe.uri}
                id={index}
                type={food.recipe.mealType}
                healthlabels={food.recipe.healthLabels}
                ingredient={food.recipe.ingredients}
                weight={food.recipe.totalWeight}
                dishtype={food.recipe.dishType}
                cautions={food.recipe.cautions}
                calories={food.recipe.calories}
                fat={food.recipe.totalDaily.FAT.quantity}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
