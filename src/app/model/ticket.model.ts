
export class Ticket{
    identifier: Number;
    title: string;
    type: string;
    priority: string;
    openedOn: Date;
    lastModifiedOn: Date;
    closedOn: Date;
    description: string;
    category: Category;
    claimer: any;
    editor: any;
    assignedTechnicians: [];
    requiredSkills: [];


  constructor(title: string, type: string, priority: string, openedOn: Date,
                lastModifiedOn: Date, closedOn: Date, description: string, category: Category, claimer: any,
                editor: any, assignedTechnicians: [], requiredSkills: []) { 
      this.title = title;
      this.type = type;
      this.priority = priority;
      this.openedOn = openedOn;
      this.lastModifiedOn = lastModifiedOn;
      this.closedOn = closedOn;
      this.description = description;
      this.category = category;
      this.claimer = claimer;
      this.editor = editor;
      this.assignedTechnicians = assignedTechnicians;
      this.requiredSkills = requiredSkills;
    }
}

export class Category {
    identifier: Number;
    name: string;

    constructor(name:string){
      this.name = name;
    }
  }


  

