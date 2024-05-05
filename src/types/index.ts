import React from "react";

export type NavItem = {
  title: string;
  href: string;
  isNew: boolean;
}

export type VisionType = {
  icon: React.ElementType;
  title: string;
  description: string;
}

export type CoreType = {
  title: string;
  Utility: string;
  Image: string;
  Details: string;
}

export type InnovationType = {
  title: string;
  description: string;
  image: string;
}

export type SocialType = {
  icon: string;
  link: string;
}

export type IconProps = {
  isActive: boolean;
}

export type VideoPlayerProps = {
  src: string;
}