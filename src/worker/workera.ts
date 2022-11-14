
self.addEventListener('message', async function(e: MessageEvent) {
    // await modulesReady;
    const type = e.data.type;
    if(type == 'hello'){
    console.log(e.data.msg);
    self.postMessage('lalalalal i am a')
    }
  })

export function logworker(){
    console.log('log : worker')
}