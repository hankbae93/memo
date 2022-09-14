import Document from "./document";

export default interface IProtoType {
	clone(mode: number): Document;
}
