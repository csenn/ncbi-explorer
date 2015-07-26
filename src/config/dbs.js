import gene from './gene/index'
import medgen from './medgen/index'
import pubmed from './pubmed/index'


/*
    NOTE: Exported db names must match db.name in each index.js
*/

export default {
    medgen: medgen,
    pubmed: pubmed,
    gene: gene
}



// var dbs = [
//  {
//      name: 'pubmed',
//      displayName: 'Pub Med'
//  },
//  {
//      name: 'medgen',
//      displayName: 'MedGen'
//  },
//  {
//      name: 'protein',
//      displayName: 'protein'
//  },
//  {
//      name: 'nuccore',
//      displayName: 'nuccore'
//  },
//  {
//      name: 'nucleotide',
//      displayName: 'nucleotide'
//  },
//  {
//      name: 'genome',
//      displayName: 'genome'
//  },
//  {
//      name: 'assembly',
//      displayName: 'assembly'
//  },
//  {
//      name: 'books',
//      displayName: 'books'
//  }
// ];


// export default dbs;


