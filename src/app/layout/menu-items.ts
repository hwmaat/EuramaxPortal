export interface MenuItem {
    text: string;
    path?: string;
    items?: MenuItem[];
  }
  
  export const menuItems: MenuItem[] = [
    { text: 'Home', path: '/' },
    {
      text: 'B2B Order bevestiging',
      items: [
        { text: 'Mailbox', path: 'b2b/mailbox' },
        { text: 'Orderbevestigingen', path: 'b2b/orders' }
      ]
    },
    {
      text: 'Decomecc',
      items: [
        { text: 'View Orders', path: '/decomecc/view' },
        { text: 'New Order', path: '/decomecc/new' }
      ]
    },
    {
      text: 'Euravib',
      items: [
        { text: 'DB2 Euravib_Import', path: '/euravib/import' }
      ]
    },
    {
      text: 'Zenya',
      items: [
        { text: 'Zenya search', path: '/zenya/search' }
      ]
    }
  ];
  