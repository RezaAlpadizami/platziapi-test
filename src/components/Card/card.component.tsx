import React, { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  price: number;
  creationAt: string;
  images: string[];
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

interface CardItemProps {
  item: Item;
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  const date = item.creationAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Link to={""} className="w-[22.5em] overflow-hidden">
      <Card
        hoverable
        style={{ width: 300, height: 500 }}
        className="relative"
        cover={
          <img
            alt={item.title}
            src={item.images[0]}
            className="w-[200px] h-[160px]"
          />
        }
      >
        <div className="flex flex-col justify-between px-[0.5em] flex-grow gap-4 items-start ">
          <div className="font-bold text-lg">
            <h2>{item.title}</h2>
          </div>
          <p className="article-description leading-relaxed text-xs text-[#555] h-16 overflow-hidden">
            {item.description}
          </p>
          <div className="absolute bottom-4">
            <small>
              <b className="mr-1">Published At:</b>
              {formatTime}
            </small>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardItem;
