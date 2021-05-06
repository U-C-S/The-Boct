type ITypesOfReplies = "h" | "b" | "cb";
interface IChatMeta {
  replyJSX: JSX.Element;
  replyBy: ITypesOfReplies;
  replyString?: string;
}

/**
 * The data structure to store all the information regarding the replies
 */
class storageClass {
  private data: IChatMeta[];

  constructor() {
    this.data = [];
  }

  /**
   * used for pushing the elems and it's metadata into the storage.
   */
  set pushit(x: IChatMeta) {
    this.data.push(x);
  }

  get read() {
    return this.data;
  }

  get numOfReplies() {
    return this.data.length;
  }

  /**
   * outputs the array of all the elems pushed into the storage.
   */
  get onlyElems() {
    return this.data.map((x) => x.replyJSX);
  }

  /*
  * Unused------------
  get onlyHumanReplies() {
    let human = this.data.map((x) => {
      if (x.replyBy === "h") {
        return x;
      }
    });
    return human as IChatMeta[];
  }

  get isRecentReplyHuman() {
    let x = this.data[this.numOfReplies - 1].replyBy === "h";
    return x;
  }

  get recent() {
    return this.data[this.numOfReplies - 1];
  }
  */
}

export { storageClass };
export type { IChatMeta, ITypesOfReplies };
