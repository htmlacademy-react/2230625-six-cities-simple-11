import {Point} from "./place-card-type";

export type LocationType = {
  id: number;
  href: string;
  name: string;
  points: Point;
  zoom: number;
};

export type LocationList = LocationType[];
