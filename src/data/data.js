const productos = [
    {
      id: 1,
      nombre: "Harry Potter 1",
      descripcion: "Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.",
      precio: "100",
      categoria: "magia",
      stock: 10,
      imagen: "https://th.bing.com/th/id/OIP.rQeV8Sc4RZBCNGiMS9soeQAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      nombre: "Harry Potter 5",
      descripcion: "Harry Potter regresa por quinto año a Hogwarts aún sacudido por la tragedia ocurrida en el Torneo de los Tres Magos.",
      precio: "120",
      categoria: "magia",
      stock: 10,
      imagen: 'https://picfiles.alphacoders.com/391/391727.jpg'
    },
    {
        id: 3,
        nombre: "Narnia 1",
        descripcion: "La historia narra las aventuras de cuatro hermanos: Lucy, Edmund, Susan y Peter, que durante la Segunda Guerra Mundial descubren el mundo de Narnia, al que acceden a través de un armario mágico.",
        precio: "150",
        categoria: "aventura",
        stock: 10,
        imagen: 'https://th.bing.com/th/id/R.16795c7446b06808a139572edd06353f?rik=l%2fnbpK43Z7Hndw&riu=http%3a%2f%2fwww.narniaweb.com%2fwp-content%2fuploads%2f2009%2f08%2f8991.jpg&ehk=hiwNT9Dphozi5HrmBJhUrPJI%2bUeFDvcfpHZNg0lwD%2bI%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id: 4,
        nombre: "Narnia 2",
        descripcion: "El príncipe Caspian, joven heredero del trono de los telmarinos, vuelve a convocar a los cuatro niños en Narnia.",
        precio: "140",
        categoria: "aventura",
        stock: 10,
        imagen: 'https://www.themoviedb.org/t/p/original/hasOsiU3D4QFw9ciKGrbb55JbuA.jpg'
      },
      {
      id: 5,
      nombre: "El Señor de los Anillos 1",
      descripcion: "En este episodio de la trilogía, el joven y tímido hobbit, Frodo Bolsón, hereda un anillo. Lejos de ser una simple baratija, se trata del Anillo único, un instrumento de poder que permitiría a Sauron, el Señor Oscuro, reinar en la Tierra Media y convertir en esclavos a sus habitantes. ",
      precio: "140",
      categoria: "fantasia",
      stock: 10,
      imagen: 'https://www.themoviedb.org/t/p/original/p6QjtBmO6U105l44U0qMDSLxT0L.jpg'
    },
    {
      id: 6,
      nombre: "El Señor de los Anillos 2",
      descripcion: "El ejército de Sauron ha atacado Minas Tirith, la capital de Gondor. Una poderosa amenaza pone en peligro la paz del reino, antaño poderoso y que ahora necesita más que nunca a su rey. ",
      precio: "170",
      categoria: "fantasia",
      stock: 10,
      imagen: 'https://th.bing.com/th/id/OIP.mF8hZd3_gzktA2BZMTlcLAHaKr?rs=1&pid=ImgDetMain'
    }
    ]


  const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 800);
    });
  };

  export default obtenerProductos