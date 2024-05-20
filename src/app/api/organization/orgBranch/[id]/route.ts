// src/api/inventory/getAll.ts
import { connectToDB } from '@/utils/index';
import prismaClient from '../../../../../../prisma/index';

export const GET=async (req: Request,
    { params }: { params: {id: number; } } )=> {
    if (req.method !== 'GET') {
        return new Response('Method not allowed',{status:405});
    }
    try {
        
        await connectToDB();
        const org = await prismaClient.orgBranch.findMany({
            where:{
                orgId:Number(params.id)
            }
        });
        
        return new Response(JSON.stringify(org), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error)
      return new Response("Internal server error",{status:500});
    } finally {
        await prismaClient.$disconnect();
    }
  }
  