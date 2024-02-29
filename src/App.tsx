import { Route, Routes } from "react-router-dom";
// import NewsMain from "./pages/News/news.component";
import { ConfigProvider } from "antd";
import Home from "./pages/Home/home.component";
import PageLayout from "./components/PageLayout/page-layout.component";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
          },
        }}
      >
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
          {/* <Route path="/people/:id" element={<PageLayout />}>
            <Route index element={<PeopleDetail />} />
          </Route>
          <Route path="/films" element={<PageLayout />}>
            <Route index element={<Films />} />
            <Route path="/films/:id" element={<FilmDetail />} />
          </Route>
          <Route path="/species" element={<PageLayout />}>
            <Route index element={<Species />} />
            <Route path="/species/:id" element={<SpeciesDetail />} />
          </Route>
          <Route path="/starships" element={<PageLayout />}>
            <Route index element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
          </Route>
          <Route path="/vehicles" element={<PageLayout />}>
            <Route index element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
          </Route> */}
        </Routes>
      </ConfigProvider>
    </>
  );
};

export default App;
