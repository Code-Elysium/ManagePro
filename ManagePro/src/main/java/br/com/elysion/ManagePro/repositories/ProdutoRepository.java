package br.com.elysion.ManagePro.repositories;

import br.com.elysion.ManagePro.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
