using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ClinicPulse
    {
        public Agenda Agenda { get; set; }
        public DadosPainel DadosPainel { get; set; }
        public Lembretes Lembretes { get; set; }
        public LogIn LogIn { get; set; }
        public Empresa Empresa { get; set; }
        public Usuario Usuario { get; set; }
        public GrupoContas GrupoContas { get; set; }
        public PacienteDados PacienteDados { get; set; }
        public PacienteComplementar PacienteComplementar { get; set; }
        public PacienteConvenio PacienteConvenio { get; set; }
        public ProntuarioConsulta ProntuarioConsulta { get; set; }
        public ProntuarioAnamnese ProntuarioAnamnese { get; set; }
        public ProntuarioExame ProntuarioExame { get; set; }
        public ProntuarioEvolucao ProntuarioEvolucao { get; set; }
        public ProntuarioHipotese ProntuarioHipotese { get; set; }
        public ProntuarioDentista ProntuarioDentista { get; set; }
        public Relatorio Relatorio { get; set; }
        public Util Util { get; set; }
        public List<Agenda> ListAgenda { get; set; }
        public List<DadosPainel> ListDadosPainel { get; set; }
        public List<Lembretes> ListLembretes { get; set; }
        public List<Lembretes> ListLembretesDiarios { get; set; }
        public List<LogIn> ListMedicos { get; set; }
        public List<PacienteAgenda> ListPacientesDia { get; set; }
        public List<LogIn> ListUsuarios { get; set; }
        public List<PacienteDados> ListPacienteDados { get; set; }
        public List<PacienteComplementar> ListPacienteComplementar { get; set; }
        public List<PacienteConvenio> ListPacienteConvenio { get; set; }
        public List<ProntuarioAnamnese> ListProntuarioAnamnese { get; set; }
        public List<ProntuarioConsulta> ListProntuarioConsulta { get; set; }
        public List<ProntuarioExame> ListProntuarioExame { get; set; }
        public List<ProntuarioEvolucao> ListProntuarioEvolucao { get; set; }
        public List<ProntuarioHipotese> ListProntuarioHipotese { get; set; }
        public List<ProntuarioDentista> ListProntuarioDentista { get; set; }

        public List<Relatorio> ListRelatorio { get; set; }
    }
    public class Util 
    {
        public string Mensagem { get; set; }
    }
    public class Listas
    {
        public class ChaveValor
        {
            public int Chave { get; set; }
            public string Valor { get; set; }
        }

        public class ChaveValorGuid
        {
            public Guid? Chave { get; set; }
            public string Valor { get; set; }
        }
    }
}
