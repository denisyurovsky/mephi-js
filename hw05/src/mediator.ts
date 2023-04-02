interface Component {
    getComponentName(): string
    send(message: string): void
    receive(message: string): void
  }

interface Mediator {
    add(component: Component): void
    notify(sender: Component, message: string): void
  }
  
  export class ComponentNotificator implements Component {
    constructor(private mediator: Mediator, private name: string) {}
  
    getComponentName() {
      return this.name
    }
  
    send(message: string) {
      console.log(`Message "${message}" sent by worker ${this.name}"`)
      this.mediator.notify(this, message)
    }
  
    receive(message: string) {
      console.log(`Message "${message}" received by worker ${this.name}"`)
    }
  }
  
  export class ComponentsSpace implements Mediator {
    private components: Component[] = []
    add(component: Component): void {
      this.components.push(component)
    }
  
    notify(sender: Component, message: string): void {
      this.components.forEach((c) => {
        if (c.getComponentName() != sender.getComponentName()) {
          c.receive(message)
        }
      })
    }
  }