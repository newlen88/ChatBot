import { Injectable } from '@nestjs/common';
import { existsSync, readFileSync } from 'fs';
import { Client } from 'whatsapp-web.js';
import { ChatBotGateway } from './chatbot.gateway';
import { CreateChatbotDto } from './dto/create-chatbot.input';
import { UpdateChatbotDto } from './dto/update-chatbot.input';

@Injectable()
export class ChatbotService {
  private client;
  private SESSION_FILE_PATH = './session.json';
  private MULTI_DEVICE = process.env.MULTI_DEVICE || 'true';
  constructor(private readonly socketMessenger: ChatBotGateway) {
    socketMessenger.verNuevo();
    /**
     * Revisamos si existe archivo con credenciales!
     */
    existsSync(this.SESSION_FILE_PATH) && this.MULTI_DEVICE === 'false'
      ? this.withSession()
      : this.withOutSession();
  }
  create(createChatbotDto: CreateChatbotDto) {
    console.log();
    return 'This action adds a new chatbot';
  }

  findAll() {
    return `This action returns all chatbot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatbot`;
  }

  update(id: number, updateChatbotDto: UpdateChatbotDto) {
    return `This action updates a #${id} chatbot`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatbot`;
  }

  private withSession() {
    console.log(`Validando session con Whatsapp...`);
    const sessionData = readFileSync(this.SESSION_FILE_PATH, 'utf8');
    // const sessionData = require(this.SESSION_FILE_PATH);
    // this.client = new Client(createClient(sessionData, true));

    // this.client.on('ready', () => {
    //   connectionReady();
    //   listenMessage();
    // });

    // client.on('auth_failure', () => connectionLost());

    // client.initialize();
  }

  private withOutSession() {
    console.log('No tenemos session guardada');
    console.log(
      [
        '🙌 El core de whatsapp se esta actualizando',
        '🙌 para proximamente dar paso al multi-device',
        '🙌 falta poco si quieres estar al pendiente unete',
        '🙌 http://t.me/leifermendez',
        '🙌 Si estas usando el modo multi-device se generan 2 QR Code escanealos',
        '🙌 Ten paciencia se esta generando el QR CODE',
        '________________________',
      ].join('\n'),
    );
  }
}
