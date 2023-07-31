import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {


    // store data
    
    // const user = await prisma.user.createMany({
    //     data: [{
    //         name: 'aliya'
    //     },
    //     ]
    // })
    // console.log(user)

    // const posts = await prisma.post.create({
    //     data: {
    //         title: "this is my first post title by aliya",
    //         body: "this is the body for post",
    //         author: {
    //             connect: {
    //                 id:'64c7912b68ff704c93959566'
    //             }
    //         }
           
    //     }
    // })
    // console.log(posts)

    // find data
    // const posts = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 name:"ali"
    //             }
    //         }
    //     },
    // })
    // console.log(posts);
 

    //update data
    //     const user = await prisma.user.update({
    //         where: {
    //             id:"64c78b707e5004d000fce0a2",
    //              name:"ali"
    //         },
    //         data: {
    //            name:"aliee"
    //        }

    //     })
    //     console.log(user)
    // }

    
    // delet data
    const postdel = await prisma.post.delete({
        where: {
            id:"64c78bf184f27fd2ab492780",
          title:"this is my first post title"
        }

    })
    console.log(postdel)

}

main()
    .catch(e => {
    console.log(e.message)
})