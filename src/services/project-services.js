export default class ProjectService {
  data = [
    {
      title: "Project Title",
      url: "https://www.google.com",
      imgSrc: "../images/site4.JPG"
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