import React from 'react';
import {
  About,
  Inbox,
  Search,
  Left,
  Paw,
  ArrowRight,
  ArrowLeft,
  MihavIcon,
  Unit,
  news,
  gift,
  giftsolid,
  newsolid,
  homesolid,
  paper,
  papersolid,
  home2,
} from '../../../assets/svg';

const iconTypes = {
  About,

  Inbox,
  Search,

  Left,
  Paw,
  ArrowRight,
  ArrowLeft,
  MihavIcon,
  Unit,
  news,
  gift,
  giftsolid,
  newsolid,
  homesolid,
  paper,
  papersolid,
  home2,
};

export const Icon = ({icon, ...props}) => {
  let Icon = iconTypes[icon];
  if (!Icon) return <></>;
  return <Icon {...props} />;
};
