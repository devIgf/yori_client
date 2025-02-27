import { RouterModule, Routes } from '@angular/router';
import { Authentification2facteursComponent } from './info_client/components/authentification2facteurs/authentification2facteurs.component';
import { ChangerPasseComponent } from './info_client/components/changer-passe/changer-passe.component';
import { ConfirmeIdentiteComponent } from './info_client/components/confirme-identite/confirme-identite.component';
import { ContacterEquipeComponent } from './info_client/components/contacter-equipe/contacter-equipe.component';
import { CreerCompteComponent } from './info_client/components/creer-compte/creer-compte.component';
import { CreerPasseComponent } from './info_client/components/creer-passe/creer-passe.component';
import { InfosUtilisateurComponent } from './info_client/components/infos-utilisateur/infos-utilisateur.component';
import { MotDePasseComponent } from './info_client/components/mot-de-passe/mot-de-passe.component';
import { NomUtilisateurComponent } from './info_client/components/nom-utilisateur/nom-utilisateur.component';
import { PasseOublieComponent } from './info_client/components/passe-oublie/passe-oublie.component';
import { ProblemeConnexionComponent } from './info_client/components/probleme-connexion/probleme-connexion.component';
import { ProblemeVerificationComponent } from './info_client/components/probleme-verification/probleme-verification.component';
import { SelectionnePhoneComponent } from './info_client/components/selectionne-phone/selectionne-phone.component';
import { ServiceClientCodeComponent } from './info_client/components/service-client-code/service-client-code.component';
import { ServiceClientComponent } from './info_client/components/service-client/service-client.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { InterfaceLayoutComponent } from './layout/interface-layout/interface-layout.component';
import { LeftTreeComponent } from './interface/tabs/components/analyse/left-tree/left-tree.component';
import { LeftTwoComponent } from './interface/tabs/components/analyse/left-two/left-two.component';
import { LeftOneComponent } from './interface/tabs/components/analyse/left-one/left-one.component';
import { LeftFourComponent } from './interface/tabs/components/analyse/left-four/left-four.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
          { path: 'connectez-vous', component: NomUtilisateurComponent },
          { path: 'mot-de-passe', component: MotDePasseComponent },
          { path: 'probleme-connexion', component: ProblemeConnexionComponent },
          { path: 'passe-oublier', component: PasseOublieComponent },
          { path: 'creer-compte', component: CreerCompteComponent },
          { path: 'infos-utilisateur', component: InfosUtilisateurComponent },
          { path: 'creer-passe', component: CreerPasseComponent },
          { path: 'contacter-equipe', component: ContacterEquipeComponent },
          { path: 'confirme-identite', component: ConfirmeIdentiteComponent },
          { path: 'selectionne-phone', component: SelectionnePhoneComponent },
          {
            path: 'authentification2facteurs',
            component: Authentification2facteursComponent,
          },
          { path: 'changer-passe', component: ChangerPasseComponent },
          {
            path: 'probleme-verification',
            component: ProblemeVerificationComponent,
          },
          { path: 'service-client-code', component: ServiceClientCodeComponent },
          { path: 'service-client', component: ServiceClientComponent },
        ],
      },

      {
        path: 'interface',
        component: InterfaceLayoutComponent,
        children: [
          { path: 'amour', component: LeftTreeComponent },
          { path: 'claudel', component: LeftTwoComponent },
          { path: 'nombre-reservation', component: LeftOneComponent },
          { path: 'inel', component: LeftFourComponent },
        ],
      },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}