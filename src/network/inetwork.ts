import * as proto from "../serialization/proto"
import { IPeer } from "./ipeer"
import { RabbitPeer } from "./rabbit/rabbitPeer"
export interface INetwork {
    start(): Promise<boolean>
    getRandomPeer(): IPeer
    getRandomPeers(count: number): IPeer[]
    connect(ip: string, port: number): Promise<IPeer>
    getPeerDb(): Promise<proto.IPeer[]>
    getConnection(): proto.IPeer[]
    getIPeers(exempt: RabbitPeer): proto.IPeer[]
    broadcastBlocks(block: proto.IBlock[]): void
    broadcastTxs(tx: proto.ITx[]): void
}
