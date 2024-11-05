import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
    const id = params.params.id;

    // if you dont receive params from the client:
    // const url = new URL(request.url);
    // const id = url.pathname.split('/').pop();
    return NextResponse.json(
        { id: id },
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        }

    );
}
