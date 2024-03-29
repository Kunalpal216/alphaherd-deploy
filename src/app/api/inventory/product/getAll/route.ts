import { connectToDB } from '../../../../../utils/index';
import prisma from '../../../../../../prisma/index';


export  const GET=async (req: Request)=> {
  if (req.method !== 'GET') {
    return new Response('Method not allowed',{status:405});
}
    try {
        await connectToDB();
        const products = await prisma.allProducts.findMany({
          include:{
            product:true
          }
        });
        return new Response(JSON.stringify(products), {
          status: 201,
          headers: {
              'Content-Type': 'application/json',
          },
      });
    } catch (error) {
      return new Response("Internal server error",{status:500});
    } finally {
        await prisma.$disconnect();
    }
  }
  