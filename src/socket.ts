export declare type SocketColorType = 'normal' | 'exec';

export class Socket {

    name: string;
    data: unknown;
    compatible: Socket[] = [];
    socketColor: string = '';
    socketType: SocketColorType = 'normal';

    constructor(
        name: string,
        data: { color: string; socketType: SocketColorType } = { color: '#fff', socketType: 'normal' })
    {
        this.name = name;
        this.data = data;
        this.compatible = [];
        this.socketColor = data.color;
        this.socketType = data ? data.socketType || 'normal' : 'normal';
    }

    combineWith(socket: Socket) {
        this.compatible.push(socket);
    }

    compatibleWith(socket: Socket) {
        return this === socket || this.compatible.includes(socket);
    }
}
