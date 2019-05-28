export default class ProjectService {
  data = [
    {
      title: "Project Title",
      url: "https://www.google.com",
      imgSrc: "https://cdn-images-1.medium.com/max/1600/1*I5YVZ7HtkIE2wspBjxbW-Q.png",
      category: ["Все работы","Избранное", "React and Redux", "Landing Page"]
    },
    {
      title: "Best project",
      url: "https://www.google.com",
      imgSrc: "https://miro.medium.com/max/642/1*rwnd-zztHEQ_Qt-ZVXH7Jw.png",
      category: ["Все работы","Избранное", "React and Redux",]
    }
  ];

  getProjects() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    })
  }
}