import React, { useState, useEffect, useCallback } from "react";
// import InputSearch from "../../components/InputSearch/input-search.component";
import PaginationButton from "../../components/Pagination/pagination.component";
import CardItem from "../../components/Card/card.component";
import { api } from "../../services/api";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import { Row } from "antd";
// import { getUrlId } from "../../utils/get-url-id";

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //   const [inputSearch, setInputSearch] = useState<string>("");

  //   const onSearch = useCallback((value: string) => {
  //     setInputSearch(value);
  //   }, []);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`products`);
      const dataProduct = await response.data;
      setData(dataProduct);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  //   const getFilteredData = useCallback(async () => {
  //     try {
  //       const response = await api.get(`proudct?title=${inputSearch}`);
  //       const returnedData = await response.data;
  //       console.log("returned", returnedData);
  //       setData(returnedData);
  //     } catch (error) {
  //       console.error("Error fetching filtered data: ", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }, [inputSearch]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     getFilteredData();
  //   }, [getFilteredData]);

  return (
    <div>
      <div className="my-4">
        <h1>Products</h1>
      </div>
      <div className="flex">
        {/* <div>
          <InputSearch placeholder={"Search People"} onSearch={onSearch} />
        </div> */}
        <div className="pagination">
          <PaginationButton page={page} setPage={setPage} data={data} />
        </div>
      </div>
      <div>
        {isLoading ? (
          <LoadingCustom />
        ) : (
          <>
            {data?.length === 0 ? (
              <Row justify={"center"} align={"middle"} className="text-empty">
                <h2>{"Data tidak ditemukan :("}</h2>
              </Row>
            ) : (
              <div className="flex align-middle items-center justify-start gap-x-10 gap-y-14 flex-wrap mt-6">
                {data?.map((product: any) => (
                  <CardItem key={product.id} item={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
