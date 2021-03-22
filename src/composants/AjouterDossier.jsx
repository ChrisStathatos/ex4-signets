import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  const useStyles = makeStyles({
    boutonVert:{
      background:'green',
      color:'white',
    },
    boutonRouge:{
      background:'red',
      color:'white',
    }
  });

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }


  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            colors = {['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555']}
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOuvert(false); viderChamps()}} className={useStyles().boutonRouge}>
            Annuler
          </Button>
          <Button onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} className={useStyles().boutonVert}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}