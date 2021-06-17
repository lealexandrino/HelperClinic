using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class PainelRepositorioEF
    {
        private Contexto contexto = new Contexto();
        public List<Lembretes> ListLembretes(ClinicPulse _model)
        {
            DateTime data = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            var lista = contexto.Lembretes.Where(x => x.IdUsuario == _model.Lembretes.IdUsuario && x.DataLembrete > data && x.Tipo == 0).OrderBy(x => x.DataLembrete).Skip(_model.Lembretes.Pagina).Take(10).ToList();
            if(lista.Count() != 0)
                lista[0].QuantidadePaginas = contexto.Lembretes.Where(x => x.IdUsuario == _model.Lembretes.IdUsuario && x.DataLembrete > data && x.Tipo == 0).Count();
            return lista;
        }

        public List<Lembretes> ListLembretesDiarios(ClinicPulse _model)
        {
            DateTime data = DateTime.Now.Date;
            DateTime datanova = data.AddDays(1);
            var lista = contexto.Lembretes.Where(x => x.Clinica == _model.LogIn.Clinica && x.DataLembrete > data && x.DataLembrete <= datanova && x.Tipo == 1 && x.Deletado == false).OrderBy(x => x.DataLembrete).Skip(_model.Lembretes.Pagina).Take(10).ToList();
            if (lista.Count() != 0)
                lista[0].QuantidadePaginas = contexto.Lembretes.Where(x => x.Clinica == _model.LogIn.Clinica && x.DataLembrete > data && x.DataLembrete <= datanova && x.Tipo == 1 && x.Deletado == false).Count();
            return lista;
        }

        public List<DadosPainel> Dados(LogIn _model, DateTime startDate, DateTime endDate)
        {
            return contexto.PacienteDados.Join(contexto.Agenda,
                              post => post.Id,
                              meta => meta.IdPaciente,
                              (post, meta) => new { Post = post, Meta = meta })
                           .Where(postAndMeta => postAndMeta.Meta.DateTimeScheduled > startDate
                                              && postAndMeta.Meta.DateTimeScheduled < endDate
                                              && postAndMeta.Meta.IdUsuario == _model.IdUsuario
                                              && postAndMeta.Meta.Deletado == false
                           ).Select(x => new DadosPainel
                           {
                               Novo = x.Post.Novo,
                           }).ToList();
        }

        public void InserirLembrete(Lembretes _model)
        {
            contexto.Lembretes.Add(_model);
            contexto.SaveChanges();
        }

        public bool Deletar(int id, Guid IdUsuario)
        {
            try 
            {
                var lembrete = contexto.Lembretes.Where(x => x.id == id && x.IdUsuario == IdUsuario).FirstOrDefault();
                contexto.Lembretes.Remove(lembrete);
                contexto.SaveChanges();

                return true;
            }
            catch(Exception ex)
            {
                return false;
            }

        }
    }
}
