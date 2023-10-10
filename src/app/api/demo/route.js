import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//1 Must use NEXT-JS

// 2 CRUD operation using user model

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    let result = await prisma.user.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

//Notes:

//  BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };

//End

CreateMany

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //   const reqBody = await req.json();

    let result = await prisma.user.createMany({
      data: [
        
         { fristName: "1",middleName: "jgggon",lastName: "pavon",mobile: "017942222",intro: "d05dd",profile: "ee05bee", },
         { fristName: "2",middleName: "jgggon",lastName: "pavon",mobile: "017942222",intro: "d05dd",profile: "ee05bee", },
         { fristName: "3",middleName: "jgggon",lastName: "pavon",mobile: "017942222",intro: "d05dd",profile: "ee05bee", },
         { fristName: "4",middleName: "jgggon",lastName: "pavon",mobile: "017942222",intro: "d05dd",profile: "ee05bee", }
       
      ],
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}


// Update


export async function POST(req, res) {
  
  try {
    const userId = BigInt(1)
    const prisma = new PrismaClient();
    
      // const reqBody = await req.json();

    const result = await prisma.user.update({
        where: { id:userId},       


        data:{fristName:"orange"}
      })
      
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
    
  }
}

// delete

const prisma = new PrismaClient();

// Convert an integer to a BigInt
const userId = BigInt(9);

// Now, you can use userId in the delete operation
await prisma.user.delete({
  where: { id: userId },
});



// findMany


export async function POST(req, res) {
  
  try {
    const userId = BigInt(1)
    const prisma = new PrismaClient();
    
      // const reqBody = await req.json();

    const result = await prisma.user.findMany({
        where: { id:userId},       
        select:{id:true}

        // data:{fristName:"orange"}
      })
      
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
    
  }
}

export async function POST(req, res) {
  
  try {
    const userId = BigInt(1)
    const prisma = new PrismaClient();
    
      // const reqBody = await req.json();

    const result = await prisma.user.findMany({
        orderBy: {
          id:"desc"
        },
        take:-5

        // data:{fristName:"orange"}
      })
      
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
    
  }
}



// CRUD operation using post model


// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();
//     const reqBody = await req.json();

//     let result = await prisma.post.create({
//       data: reqBody,
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
//   }
// }







// const prisma = new PrismaClient();

// // Convert an integer to a BigInt
// const userId = BigInt(9);

// // Now, you can use userId in the delete operation
// try {

//   const result = await prisma.user.delete({
//   where: { id: userId },

// });
// return NextResponse.json({ status: "success", data: result });
// } catch (error) {
//   return NextResponse.json({ status: "fail", data: error.toString() });
// }


// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();
//     //   const reqBody = await req.json();

//     let result = await prisma.post.createMany({
//       data: [
        
//         {
//           "authorId":91,
//           "parentId":91,
//           "title":"Live cricket score",
//           "metaTitle":"eedeejfj",
//           "slug":"ddeddieie",
//           "summary":"ddd",
//           "published":"eeeee",
//           "content":"eeeee"
//       },
//         {
//           "authorId":92,
//           "parentId":92,
//           "title":"Live cricket score",
//           "metaTitle":"eedeejfj",
//           "slug":"ddeddieie",
//           "summary":"ddd",
//           "published":"eeeee",
//           "content":"eeeee"
//       },
//         {
//           "authorId":93,
//           "parentId":93,
//           "title":"Live cricket score",
//           "metaTitle":"eedeejfj",
//           "slug":"ddeddieie",
//           "summary":"ddd",
//           "published":"eeeee",
//           "content":"eeeee"
//       },
//         {
//           "authorId":94,
//           "parentId":94,
//           "title":"Live cricket score",
//           "metaTitle":"eedeejfj",
//           "slug":"ddeddieie",
//           "summary":"ddd",
//           "published":"eeeee",
//           "content":"eeeee"
//       },
//         {
//           "authorId":95,
//           "parentId":95,
//           "title":"Live cricket score",
//           "metaTitle":"eedeejfj",
//           "slug":"ddeddieie",
//           "summary":"ddd",
//           "published":"eeeee",
//           "content":"eeeee"
//       },
       
//       ],
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
//   }
// }


// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();
    
//       // const reqBody = await req.json();

//     const result = await prisma.post.update({
//         where: { id:userId},       


//         data:{title:"Bangladesh lost the game"}
//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }



// const prisma = new PrismaClient();

// const userId = BigInt(6);

// await prisma.post.delete({
//   where: { id: userId },
// });




// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();
 

//     const result = await prisma.post.findMany({
//         where: { id:userId},       
//         select:{id:true}
//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }

// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();
//     const result = await prisma.post.findMany({
//         orderBy: {
//           id:"desc"
//         },
//         take:-5
//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }



// 4 CRUD operation using post_comment model.



// 4 CRUD operation using tag model

// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();
//     const reqBody = await req.json();

//     let result = await prisma.tag.create({
//       data: reqBody,
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
//   }
// }



//CreateMany

// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();


//     let result = await prisma.tag.createMany({
//       data: [
        
//         {
//           "title":"Dhaka",
//           "metaTitle":"Banghladesh",
//           "slug":"Banghladesh",
//           "content":"Banghladesh" 
//       },
//         {
//           "title":"mymenshing",
//           "metaTitle":"Banghladesh",
//           "slug":"Banghladesh",
//           "content":"Banghladesh" 
//       },
//         {
//           "title":"rungpir",
//           "metaTitle":"Banghladesh",
//           "slug":"Banghladesh",
//           "content":"Banghladesh" 
//       },
//         {
//           "title":"comla",
//           "metaTitle":"Banghladesh",
//           "slug":"Banghladesh",
//           "content":"Banghladesh" 
//       },
       
//       ],
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
//   }
// }


// Update


// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();

//     const result = await prisma.tag.update({
//         where: { id:userId},       


//         data:{title:"Bogora"}
//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }

// delete

// const prisma = new PrismaClient();

// const userId = BigInt(5);

// await prisma.tag.delete({
//   where: { id: userId },
// });



// findMany


// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();


//     const result = await prisma.tag.findMany({
//         where: { id:userId},       
//         select:{id:true}

//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }

// export async function POST(req, res) {
  
//   try {
//     const userId = BigInt(1)
//     const prisma = new PrismaClient();


//     const result = await prisma.tag.findMany({
//         orderBy: {
//           id:"desc"
//         },
//         take:-5
//       })
      
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
    
//   }
// }




