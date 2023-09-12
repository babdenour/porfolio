export interface Image {
  name: string,
  path: string,
}

export interface Technology {
  _id: string,
  name: string,
  image: Image,
}

export interface Project  {
  _id: string,
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}
