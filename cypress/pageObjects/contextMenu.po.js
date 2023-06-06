const contextMenu = 'div[id="hot-spot"]';

export function contextMenuAppearsAfterBoxIsClicked() {
    const stub = cy.stub();
    cy.on('window:alert', stub)
    cy.get(contextMenu).rightclick().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You selected a context menu')      
    });
}