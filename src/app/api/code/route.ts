import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI();

export interface ChatCompletionRequestMessage {
  role: string;
  content: string;
}

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!client.apiKey) {
      return new NextResponse('OpenAI API Key not configured.', {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
