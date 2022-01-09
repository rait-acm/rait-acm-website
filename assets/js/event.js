// need to be loaded before mapping
//import img from "../../assets/img/events/";
function setImg(imgId, eventType) {
  let imgSrc;
  let category = eventType?.split(" ")[0];
  Boolean(category)
    ? (imgSrc = `../../assets/img/events/default/${category.toLowerCase()}-default.webp`) // cat-default.webp
    : (imgSrc = `../../assets/img/events/default/workshop-default.webp`);

  document.getElementById(imgId).src = imgSrc;
  return null;
  //   switch (eventType?.split(" ")[0]) {
  //     case "Workshop":
  //       return (imgSrc = " shdsh "), alert("workshop");
  //     case "Webinar":
  //       return alert("stud");
  //     case "Social":
  //       return alert("social");
  //     case "Student":
  //       return alert("stud");
  //     case "Community":
  //       return alert("social");
  //     case "Internship":
  //       return alert("stud");
  //     case "Chapter":
  //       return alert("stud");

  //     default:
  //       return "";
  //   }
}
