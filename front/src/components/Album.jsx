function Album() {
  const tigers = [
    {
      url: "https://media.istockphoto.com/id/1420676204/photo/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.jpg?s=612x612&w=0&k=20&c=0OCYv99Ktv3fJ-YYlg7SetHBJj3pIk58WY7GDy5VCtI=",
    },
    {
      url: "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    },
    {
      url: "https://cbx-prod.b-cdn.net/COLOURBOX57223165.jpg?width=800&height=800&quality=70",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {tigers.map((tiger, index) => (
        <img
          key={index}
          src={tiger.url}
          style={{ width: "400px", height: "200px" }}
        />
      ))}
    </div>
  );
}

export default Album;
