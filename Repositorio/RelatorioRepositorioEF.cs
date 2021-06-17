using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class RelatorioRepositorioEF
    {
        private Contexto contexto = new Contexto();
        public List<Relatorio> ListRelatorio(ClinicPulse _model)
        {

            return contexto.Agenda.Join(contexto.PacienteDados,
                              post => post.IdPaciente,
                              meta => meta.Id,
                              (post, meta) => new { Post = post, Meta = meta })
                           .Where(postAndMeta => postAndMeta.Post.DateTimeScheduled > _model.Relatorio.DataInicial
                                               && postAndMeta.Post.DateTimeScheduled <= _model.Relatorio.DataFim
                                               && postAndMeta.Post.IdUsuario == _model.Relatorio.IdUsuario
                           ).Select(x => new Relatorio
                           {
                               AppointmentLength = x.Post.AppointmentLength,
                               DateTimeScheduled = x.Post.DateTimeScheduled,
                               DataNascimento = x.Meta.DataNascimento,
                               Nome = x.Meta.Nome,
                               Email = x.Meta.Email,
                               TelefoneCelular = x.Meta.TelefoneCelular,
                           }).ToList();

        }
    }
}
