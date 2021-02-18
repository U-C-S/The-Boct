type typesOfReplies = "h" | "b" | "cb";
interface IChatMeta {
  element: JSX.Element;
  replyBy: typesOfReplies;
  replyString: string | null;
}

class storageClass {
  private data: IChatMeta[];
  constructor() {
    this.data = [];
  }

  /**
   * used for pushing the elems and it's metadata into the storage.
   */
  pushit(element: JSX.Element, replyBy: typesOfReplies, replyString: string | null = null) {
    this.data.push({
      element,
      replyBy,
      replyString,
    });
  }

  get read() {
    return this.data;
  }

  get recent() {
    return this.data[this.numOfReplies - 1];
  }

  get numOfReplies() {
    return this.data.length;
  }

  /**
   * outputs the array of all the elems pushed into the storage.
   */
  get onlyElems() {
    return this.data.map((x) => x.element);
  }

  get onlyHumanReplies() {
    let human = this.data.map((x) => {
      if (x.replyBy == "h") {
        return x;
      }
    });
    return human;
  }

  get isRecentReplyHuman() {
    let x = this.data[this.numOfReplies - 1].replyBy === "h";
    return x;
  }
}

export { storageClass };
export type { IChatMeta, typesOfReplies };
