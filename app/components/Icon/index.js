import React from 'react';
import {
  About,
  Home,
  Inbox,
  Search,
  Gift,
  Left,
  Paw,
  ArrowRight,
  ArrowLeft,
  MihavIcon,
  Unit,
} from '../../../assets/svg';

const iconTypes = {
  About,
  Home,
  Inbox,
  Search,
  Gift,
  Left,
  Paw,
  ArrowRight,
  ArrowLeft,
  MihavIcon,
  Unit,
};

export const Icon = ({icon, ...props}) => {
  let Icon = iconTypes[icon];
  if (!Icon) return <></>;
  return <Icon {...props} />;
};
